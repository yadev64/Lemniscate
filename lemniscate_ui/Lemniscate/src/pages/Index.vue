<template>
  <q-page>
    <div class="row" style="width: 100%">
      <div class="col-8">
        <q-card class="q-ma-md" style="width: 100%">
          <q-card-section>
            <h6 class="q-my-md">Overview</h6>

            <div style="width: 400px">
              <div style="display: flex; justify-content: center">
                <button type="button" @click="shuffleData">Shuffle</button>
                <button type="button" @click="switchLegend">
                  Swicth legends
                </button>
              </div>
              <DoughnutChart v-bind="doughnutChartProps" />
            </div>
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
import { computed, ref, defineComponent } from "vue";
import { shuffle } from "lodash";
import { DoughnutChart, useDoughnutChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";

Chart.register(...registerables);

export default {
  name: "App",
  components: { DoughnutChart },
  setup() {
    const dataValues = ref([30, 40, 60, 70, 5]);
    const toggleLegend = ref(true);

    const testData =
      computed <
      ChartData <
      "doughnut" >>
        (() => ({
          labels: ["Paris", "Nîmes", "Toulon", "Perpignan", "Autre"],
          datasets: [
            {
              data: dataValues.value,
              backgroundColor: [
                "#77CEFF",
                "#0079AF",
                "#123E6B",
                "#97B0C4",
                "#A5C8ED",
              ],
            },
          ],
        }));

    const options =
      computed <
      ChartOptions <
      "doughnut" >>
        (() => ({
          scales: {
            myScale: {
              type: "logarithmic",
              position: toggleLegend.value ? "left" : "right",
            },
          },
          plugins: {
            legend: {
              position: toggleLegend.value ? "top" : "bottom",
            },
            title: {
              display: true,
              text: "Chart.js Doughnut Chart",
            },
          },
        }));

    const { doughnutChartProps, doughnutChartRef } = useDoughnutChart({
      chartData: testData,
      options,
    });

    function shuffleData() {
      dataValues.value = shuffle(dataValues.value);
      console.log(doughnutChartRef.value.chartInstance);
    }

    function switchLegend() {
      toggleLegend.value = !toggleLegend.value;
    }

    return {
      shuffleData,
      switchLegend,
      testData,
      options,
      doughnutChartRef,
      doughnutChartProps,
    };
  },
};
</script>
