<template>
  <p>{{ message }}</p>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { appContainer } from "~/services/inversify";
import { TYPES } from "~/services/inversify-types";
import { IDemoService } from "~/services/demo/IDemoService";
import { ILoggingService } from "~/services/logging/ILoggingService";

@Component({
  name: "IndexPage",
})
export default class IndexPage extends Vue {
  private demoService: IDemoService = appContainer.get<IDemoService>(
    TYPES.DemoService
  );
  private loggingService: ILoggingService = appContainer.get<ILoggingService>(
    TYPES.LoggingService
  );

  mounted() {
    this.loggingService.logDemoMessage();
  }

  get message(): string {
    return this.demoService.getDemoMessage();
  }
}
</script>
