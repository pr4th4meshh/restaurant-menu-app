import { StarFilled } from "@ant-design/icons"
import { Card } from "antd"

const InfoCard = ({
  restName,
  ratings,
  noOfRatings,
  basicAmountToSpend,
  cuisine,
}: any) => {
  return (
    <Card
      className=" shadow-xl border-[1px] border-gray-300 "
      title={<h1 className="text-xl font-semibold text-red-600">{restName}</h1>}
    >
      <div className="text-xl font-semibold">
        <h3>
          <StarFilled style={{ color: "#c7d930" }} /> {ratings} | ({noOfRatings}{" "}
          ratings)
        </h3>
        <h3>$ {basicAmountToSpend} for two</h3>
        <h3 className="text-orange-500">{cuisine}</h3>
      </div>
    </Card>
  )
}

export default InfoCard
