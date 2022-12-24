export default function animatedDetails(
  element: HTMLDetailsElement,
  { duration = 150, easing = "ease-out" }: KeyframeAnimationOptions = {
    duration: 150,
    easing: "ease-out",
  }
) {
  let transitioning = false;

  const animatePanel = (opening: boolean) => {
    transitioning = true;

    const heightKeyframes = [
      `${element.firstElementChild?.offsetHeight}px`,
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
  element.firstElementChild?.addEventListener("click", onClick);

  return {
    destroy() {
      element.removeEventListener("toggle", onToggle);
      element.firstElementChild?.removeEventListener("click", onClick);
    },
    update(
      {
        duration: newDuration = 150,
        easing: newEasing = "ease-out",
      }: KeyframeAnimationOptions = {
        duration: 150,
        easing: "ease-out",
      }
    ) {
      duration = newDuration;
      easing = newEasing;
    },
  };
}
