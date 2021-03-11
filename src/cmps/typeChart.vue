
<script>
import { Doughnut } from "vue-chartjs";
import { utilService } from "../services/util.service";
export default {
    props: {
        toys: {
            required: true,
        },
    },
    data() {
        return {
            labels: [],
            data: [],
            bgc: [],
        };
    },
    methods: {
        insertData() {
            const totalByType = this.toys.reduce((obj, toy) => {
                if (!obj[toy.type]) obj[toy.type] = { cnt: 0, total: 0 };
                obj[toy.type].cnt++;
                obj[toy.type].total += toy.price;
                return obj;
            }, {});

            this.labels = Object.keys(totalByType);
            const objValues = Object.values(totalByType);
            this.data = objValues.map((objVal) => {
                this.bgc.push(utilService.getRandomColor());
                return objVal.total / objVal.cnt;
            });

            // for (const [key, value] of Object.entries(totalByType)) {
            //     totalByType[key].average =
            //         totalByType[key].total / totalByType[key].cnt;
            //     this.labels.push(key);
            //     this.data.push(totalByType[key].average);
            //     this.bgc.push(utilService.getRandomColor());

            //     console.log("labels", this.labels);
            //     console.log("data", this.data);
            // }
        },
    },
    extends: Doughnut,
    mounted() {
        this.insertData();
        // Overwriting base render method with actual data.
        this.renderChart({
            labels: this.labels,
            datasets: [
                {
                    label: "GitHub Commits",
                    backgroundColor: this.bgc,
                    data: this.data,
                },
            ],
        });
    },
};
</script>

