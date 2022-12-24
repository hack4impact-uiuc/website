type AnimatedDetailsOptions = Pick<
  KeyframeAnimationOptions,
  "duration" | "easing"
>;

export default function animatedDetails(
  element: HTMLDetailsElement,
  { duration = 150, easing = "ease-out" }: AnimatedDetailsOptions = {
    duration: 150,
    easing: "ease-out",
  }
) {
  const summary = element.querySelector("summary");
  if (!summary) return;

  let transitioning = false;

  const animatePanel = (opening: boolean) => {
    transitioning = true;

    const heightKeyframes = [
      `${summary.offsetHeight}px`,
      `${element.offsetHeight}px`,
    ];

    if (!opening) {
      heightKeyframes.reverse();
    }

    const animation = element.animate(
      {
        height: heightKeyframes,
      },
      {
        duration,
        easing,
      }
    );

    animation.oncancel =
      animation.onfinish =
      animation.onremove =
        () => {
          if (!opening) {
            element.open = false;
          }

          transitioning = false;
        };
  };

  const onToggle = () => {
    if (transitioning) return;

    if (element.open) {
      animatePanel(true);
    }
  };

  const onClick = (e: Event) => {
    e.preventDefault();

    if (transitioning) return;

    if (!element.open) {
      element.open = true;
      animatePanel(true);
    } else {
      animatePanel(false);
    }
  };

  element.addEventListener("toggle", onToggle);
  summary.addEventListener("click", onClick);

  return {
    destroy() {
      element.removeEventListener("toggle", onToggle);
      summary.removeEventListener("click", onClick);
    },
    update(
      {
        duration: newDuration = 150,
        easing: newEasing = "ease-out",
      }: AnimatedDetailsOptions = {
        duration: 150,
        easing: "ease-out",
      }
    ) {
      duration = newDuration;
      easing = newEasing;
    },
  };
}
