<template>
  <div id="view" class="hidden">
    <CookieInfo/>
    <CodeLine/>
    <Profile :data="data"/>
    <Section :section="Section.Skills"></Section>
    <CodeLine/>
    <template v-for="skillset in data.skills">
      <SkillSet
        :title="skillset.title"
        :skillset="skillset"
        :key="skillset.title"
      />
    </template>
    <CodeLine/>
    <ShowCaseSection
      :section="Section.Projects"
      name="projects"
      :data="data.projects"
    />
    <CodeLine/>
    <CodeLine/>
    <Legal/>
  </div>
</template>

<script lang="ts">
  import * as data from '../data';

  import SkillSet from './_skill_set.vue';
  import Section from './_section.vue';
  import CodeLine from './_code_line.vue';
  import CurriculumVitae from './_curriculum_vitae.vue';
  import ShowCaseSection from './_show_case_section.vue';
  import Legal from './_legal.vue';
  import Privacy from './_privacy.vue';
  import Profile from "./_profile.vue";
  import CookieInfo from "./_cookie_info.vue";

  export default {
    data() {
      return {
        data,
      };
    },
    computed: {
      year() {
        return new Date().getFullYear();
      },
    },
    components: {
      SkillSet,
      Section,
      CodeLine,
      CurriculumVitae,
      ShowCaseSection,
      Legal,
      Privacy,
      Profile,
      CookieInfo,
    },
  };
</script>
