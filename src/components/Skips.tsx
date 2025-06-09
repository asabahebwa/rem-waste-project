export type Skip = {
  id: number;
  size: number;
  hire_period_days: number;
  price_before_vat: number;
  allowed_on_road: boolean;
};

type SkipsProps = {
  skips: Skip[];
};

function Skips({ skips }: SkipsProps) {
  return (
    <div id="skips">
      <h1>Choose your skip size</h1>
      <ul>
        {skips.map((skip) => (
          <li key={skip.id}>
            <h2>{skip.size}</h2>
            <p>{skip.price_before_vat}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skips;
