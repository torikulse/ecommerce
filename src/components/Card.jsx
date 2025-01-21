import Overlay from "./Overlay";

function Card(props) {
  return (
    <div className="p-4 shadow shadow-orange-200">
      <div className="group relative overflow-hidden">
        <div className="absolute rounded bg-black p-2 text-white">
          {props.discountPercentage} %
        </div>
        <img src={props.thumb} className="w-full" alt="" />
        <div className="absolute -bottom-28 w-full transition-all duration-300 group-hover:bottom-0">
          <Overlay />
        </div>
      </div>
      <div className="flex justify-between pt-2">
        <h1 className="text-2xl font-semibold text-neutral-800">
          {props.title}
        </h1>{" "}
        <h2 className="min-w-fit text-xl font-semibold text-orange-600">
          ${props.price}
        </h2>
      </div>
    </div>
  );
}

export default Card;
