<script lang="ts">
  import * as ackeeTracker from "ackee-tracker";
  import { beforeUpdate } from "svelte";

  if (
    import.meta.env.CLIENT_ACKEE_URL &&
    import.meta.env.CLIENT_ACKEE_DOMAIN_ID
  ) {
    beforeUpdate(() =>
      ackeeTracker
        .create(import.meta.env.CLIENT_ACKEE_URL)
        .record(import.meta.env.CLIENT_ACKEE_DOMAIN_ID)
    );
  }
</script>

<slot />
