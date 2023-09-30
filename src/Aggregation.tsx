import { Category } from "./Category";
import { AggregationType } from "./types";

export const Aggregation = ({
  aggregation,
  switchCategory,
}: {
  aggregation: AggregationType;
  switchCategory: (type: string) => void;
}) => {
  return (
    <div className="aggregation">
      <Category
        label="Total:"
        number={aggregation.total}
        type="total"
        switchCategory={switchCategory}
      />

      <Category
        label="Completed:"
        number={aggregation.completed}
        type="completed"
        switchCategory={switchCategory}
      />

      <Category
        label="Active:"
        number={aggregation.active}
        type="active"
        switchCategory={switchCategory}
      />
    </div>
  );
};
