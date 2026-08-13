const formSubmitEndpoint = "https://formsubmit.co/ajax/takumi.ishii.0224@gmail.com";

export type ExternalFeedbackInput = {
  message: string;
  contact?: string;
  sourceUrl: string;
};

export async function submitExternalFeedback(input: ExternalFeedbackInput): Promise<void> {
  const response = await fetch(formSubmitEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      feedback: input.message.trim(),
      contact: input.contact?.trim() || "未入力",
      _subject: "自己営業LPから新しいフィードバック",
      _url: input.sourceUrl,
      _honey: "",
    }),
  });

  if (!response.ok) {
    throw new Error("External feedback submission failed");
  }
}
