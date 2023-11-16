import { useNavigate } from "react-router-dom";
import { BicycleCardProps } from "../../types";
import { useMainBike } from "../../store/userStore";

function BicycleCard({
  bicycleId,
  name,
  registrationDate,
  image,
}: BicycleCardProps) {
  const { setMain } = useMainBike();
  const navigate = useNavigate();

  return (
    <div className="px-5 py-2 border rounded-md shadow-md">
      <div className="flex items-center">
        <img
          src={image}
          alt="logo"
          className="w-12 h-12 mt-3 bg-gray-100 rounded-full"
          onClick={() => {
            setMain(bicycleId);
          }}
        />
        <div className="mt-2 ml-4">
          <p className="text-lg font-semibold text-gray-700">{name}</p>
          <p className="text-xs text-gray-500">
            등록일: {registrationDate.toISOString().split("T")[0]}
          </p>
        </div>
      </div>

      <hr className="my-3" />
      <div
        className="block mb-1 text-xs text-center text-blue-500 hover:underline"
        onClick={() => {
          navigate("/management", { state: bicycleId });
        }}
      >
        자세히 보기
      </div>
    </div>
  );
}

export default BicycleCard;
