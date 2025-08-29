export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log("Submitting body:", body)
    console.log("GSHEET_WEBAPP_URL:", process.env.GSHEET_WEBAPP_URL)

    const response = await fetch(process.env.GSHEET_WEBAPP_URL as string, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })

    const text = await response.text()
    console.log("Response from Sheets script:", text)

    return new Response(text, { status: response.status })
  } catch (err) {
    console.error("Error submitting to Google Sheets:", err)
    return new Response(
      JSON.stringify({ success: false, message: "Failed to submit application" }),
      { status: 500 }
    )
  }
}
