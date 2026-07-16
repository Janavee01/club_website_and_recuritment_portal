export async function POST(req: Request) {
  try {
    const body = await req.json()

    if (!body?.name || !body?.email || !body?.department) {
      return Response.json(
        { success: false, message: "Missing required fields: name, email, department" },
        { status: 400 }
      )
    }

    const webhookUrl = process.env.GSHEET_WEBAPP_URL
    if (!webhookUrl) {
      console.error("GSHEET_WEBAPP_URL is not configured")
      return Response.json(
        { success: false, message: "Server misconfiguration: submission endpoint not set" },
        { status: 500 }
      )
    }

    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })

    const rawText = await upstream.text()

    // Apps Script doesn't reliably return JSON, so normalize the contract here
    // rather than passing through whatever it sent.
    if (!upstream.ok) {
      console.error("Sheets webhook returned an error:", upstream.status, rawText)
      return Response.json(
        { success: false, message: "Failed to submit application" },
        { status: 502 }
      )
    }

    return Response.json({ success: true, message: "Application submitted" }, { status: 200 })
  } catch (err) {
    console.error("Error submitting to Google Sheets:", err)
    return Response.json(
      { success: false, message: "Failed to submit application" },
      { status: 500 }
    )
  }
}
