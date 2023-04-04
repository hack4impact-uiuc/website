export function load({ locals }) {
  return {
    title: "How We Work",
    faqs: locals.contentWrapper.get("faq", {
      order: "fields.order",
      "fields.category": "Work",
    }),
  };
}
