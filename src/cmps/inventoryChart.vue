
<script>
import { Doughnut  } from "vue-chartjs";
import { utilService } from '../services/util.service';
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
            bgc: []
        };
    },
    methods: {
        insertData() {
            const InStockPercentageByType = this.toys.reduce((obj, toy) => {
                if (!obj[toy.type])
                    obj[toy.type] = { InStockCount: 0, totalItemCount: 0 };
                if (toy.inStock) obj[toy.type].InStockCount++;
                obj[toy.type].totalItemCount++;
                return obj;
            }, {});

            for (const [key, value] of Object.entries(
                InStockPercentageByType
            )) {
                InStockPercentageByType[key].percentage = (
                    (InStockPercentageByType[key].InStockCount /
                        InStockPercentageByType[key].totalItemCount) *
                    100
                )
                InStockPercentageByType[key].percentage = parseInt(InStockPercentageByType[key].percentage)
                console.log(value);
                this.labels.push(key);
                this.data.push(InStockPercentageByType[key].percentage)
                this.bgc.push(utilService.getRandomColor())
                
            }
        },
    },
    extends: Doughnut ,
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

