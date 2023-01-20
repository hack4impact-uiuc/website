function createListFormatter() {
  if (Intl.ListFormat) {
    return new Intl.ListFormat("en", { style: "long", type: "conjunction" });
  }

  return {
    format(items: any[]) {
      items.join(",");
    },
  };
}

export const listFormatter = createListFormatter();
