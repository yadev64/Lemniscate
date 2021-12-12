<template>
  <q-page padding>
    <div class="row" style="width: 100%">
      <div class="col-8">
        <q-card class="q-ma-md" style="width: 100%">
          <q-card-section>
            <h6 class="q-my-md">Source file</h6>

            <q-file filled v-model="model" label="Select file" />

            <q-input
              class="q-mt-md"
              filled
              v-model="text"
              label="Product tags"
              hint="Give keywords to look for in the reviews"
            />

            <div class="row">
              <q-badge class="q-ma-sm" color="positive"> Camera </q-badge>
              <q-badge class="q-ma-sm" color="positive"> Chat </q-badge>
              <q-badge class="q-ma-sm" color="positive">
                Camera Filters
              </q-badge>
            </div>

            <q-btn class="q-mt-md text-white bg-accent">Analyze</q-btn>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <h6 class="q-mx-md q-mt-md q-mb-none">Reviews</h6>
    <div class="row" style="width: 100%">
      <div class="col-8">
        <q-card class="q-ma-md" style="width: 100%">
          <q-card-section style="width: 100%">
            <div class="row" style="width: 100%">
              <div class="col-8">
                <p class="q-my-md"><b>Name of reviewer</b></p>
                <p class="q-my-md">
                  This is the review of the user. It will appear here
                </p>
                <q-badge color="positive"> Emotion </q-badge>
                <q-badge class="q-ml-md" color="info"> score </q-badge>
              </div>
              <div class="col-4 flex flex-center text-warning">
                <h5>x.xx</h5>
              </div>
            </div>
          </q-card-section>
        </q-card>

        <q-card class="q-ma-md" style="width: 100%">
          <q-card-section style="width: 100%">
            <div class="row" style="width: 100%">
              <div class="col-8">
                <p class="q-my-md"><b>Name of reviewer</b></p>
                <p class="q-my-md">
                  This is the review of the user. It will appear here
                </p>
                <q-badge color="positive"> Emotion </q-badge>
                <q-badge class="q-ml-md" color="info"> score </q-badge>
              </div>
              <div class="col-4 flex flex-center text-warning">
                <h5>x.xx</h5>
              </div>
            </div>
          </q-card-section>
        </q-card>

        <q-card class="q-ma-md" style="width: 100%">
          <q-card-section style="width: 100%">
            <div class="row" style="width: 100%">
              <div class="col-8">
                <p class="q-my-md"><b>Name of reviewer</b></p>
                <p class="q-my-md">
                  This is the review of the user. It will appear here
                </p>
                <q-badge color="positive"> Emotion </q-badge>
                <q-badge class="q-ml-md" color="info"> score </q-badge>
              </div>
              <div class="col-4 flex flex-center text-warning">
                <h5>x.xx</h5>
              </div>
            </div>
          </q-card-section>
        </q-card>

        <q-card class="q-ma-md" style="width: 100%">
          <q-card-section style="width: 100%">
            <div class="row" style="width: 100%">
              <div class="col-8">
                <p class="q-my-md"><b>Name of reviewer</b></p>
                <p class="q-my-md">
                  This is the review of the user. It will appear here
                </p>
                <q-badge color="positive"> Emotion </q-badge>
                <q-badge class="q-ml-md" color="info"> score </q-badge>
              </div>
              <div class="col-4 flex flex-center text-warning">
                <h5>x.xx</h5>
              </div>
            </div>
          </q-card-section>
        </q-card>

        <q-card class="q-ma-md" style="width: 100%">
          <q-card-section style="width: 100%">
            <div class="row" style="width: 100%">
              <div class="col-8">
                <p class="q-my-md"><b>Name of reviewer</b></p>
                <p class="q-my-md">
                  This is the review of the user. It will appear here
                </p>
                <q-badge color="positive"> Emotion </q-badge>
                <q-badge class="q-ml-md" color="info"> score </q-badge>
              </div>
              <div class="col-4 flex flex-center text-warning">
                <h5>x.xx</h5>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>
