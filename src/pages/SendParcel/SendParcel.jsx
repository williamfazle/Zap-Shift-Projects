import React, { useState } from "react";
import { useForm } from "react-hook-form";
//import { Toaster, toast } from "react-hot-toast";

// Example warehouse data (replace with your API/db data if needed)
const warehouses = [
  { region: "North", district: "Dhaka", serviceCenter: "Uttara Center" },
  { region: "North", district: "Gazipur", serviceCenter: "Gazipur Hub" },
  { region: "South", district: "Chittagong", serviceCenter: "Agrabad Center" },
  { region: "East", district: "Sylhet", serviceCenter: "Sylhet Hub" },
  { region: "West", district: "Rajshahi", serviceCenter: "Rajshahi Hub" },
];

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  const [pendingData, setPendingData] = useState(null);

  const parcelType = watch("type");
  const senderRegion = watch("regionSender");
  const receiverRegion = watch("regionReceiver");

  const senderCenters = warehouses.filter((w) => w.region === senderRegion);
  const receiverCenters = warehouses.filter((w) => w.region === receiverRegion);

  const onSubmit = (data) => {
    let cost = 100;
    if (data.type === "non-document") {
      cost += Number(data.weight || 0) * 10;
    }
    cost +=
      data.serviceCenterSender === data.serviceCenterReceiver ? 50 : 100;

    const parcelData = {
      ...data,
      cost,
      creation_date: new Date().toISOString(),
    };

    setPendingData(parcelData);
   // toast.success(`Delivery Cost: $${cost}. Confirm to Save.`);
  };

  const handleConfirm = () => {
    if (!pendingData) return;
    console.log("✅ Parcel Saved:", pendingData);
    //toast.success("Parcel saved successfully!");
    reset();
    setPendingData(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-200 rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-2">Send a Parcel</h1>
      <p className="text-center text-gray-500 mb-6">
        Please fill the form carefully to book your parcel
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Parcel Info */}
        <div className="bg-base-100 p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-3">Parcel Info</h2>
          <div className="grid gap-4">
            <div>
              <label className="label">Type</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="document"
                    {...register("type", { required: "Type is required" })}
                    className="radio radio-primary"
                  />
                  <span>Document</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="non-document"
                    {...register("type", { required: "Type is required" })}
                    className="radio radio-primary"
                  />
                  <span>Non-Document</span>
                </label>
              </div>
              {errors.type && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.type.message}
                </p>
              )}
            </div>

            <div>
              <label className="label">Title</label>
              <input
                type="text"
                {...register("title", { required: "Title is required" })}
                className="input input-bordered w-full"
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>

            {parcelType === "non-document" && (
              <div>
                <label className="label">Weight (kg)</label>
                <input
                  type="number"
                  step="0.1"
                  {...register("weight")}
                  className="input input-bordered w-full"
                />
              </div>
            )}
          </div>
        </div>

        {/* Sender & Receiver Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sender Info */}
          <div className="bg-base-100 p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-3">Sender Info</h2>
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Sender Name"
                defaultValue="Your Name"
                {...register("senderName", { required: true })}
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="Contact"
                {...register("senderContact", { required: true })}
                className="input input-bordered w-full"
              />

              <select
                {...register("regionSender", { required: true })}
                className="select select-bordered w-full"
                onChange={(e) => {
                  setValue("regionSender", e.target.value);
                  setValue("serviceCenterSender", "");
                }}
              >
                <option value="">Select Region</option>
                {[...new Set(warehouses.map((w) => w.region))].map(
                  (region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  )
                )}
              </select>

              <select
                {...register("serviceCenterSender", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="">Select Service Center</option>
                {senderCenters.map((w, idx) => (
                  <option key={idx} value={w.serviceCenter}>
                    {w.serviceCenter} ({w.district})
                  </option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Address"
                {...register("senderAddress", { required: true })}
                className="input input-bordered w-full"
              />
              <textarea
                placeholder="Pickup Instruction"
                {...register("pickupInstruction", { required: true })}
                className="textarea textarea-bordered w-full"
              />
            </div>
          </div>

          {/* Receiver Info */}
          <div className="bg-base-100 p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-3">Receiver Info</h2>
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Receiver Name"
                {...register("receiverName", { required: true })}
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="Contact"
                {...register("receiverContact", { required: true })}
                className="input input-bordered w-full"
              />

              <select
                {...register("regionReceiver", { required: true })}
                className="select select-bordered w-full"
                onChange={(e) => {
                  setValue("regionReceiver", e.target.value);
                  setValue("serviceCenterReceiver", "");
                }}
              >
                <option value="">Select Region</option>
                {[...new Set(warehouses.map((w) => w.region))].map(
                  (region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  )
                )}
              </select>

              <select
                {...register("serviceCenterReceiver", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="">Select Service Center</option>
                {receiverCenters.map((w, idx) => (
                  <option key={idx} value={w.serviceCenter}>
                    {w.serviceCenter} ({w.district})
                  </option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Address"
                {...register("receiverAddress", { required: true })}
                className="input input-bordered w-full"
              />
              <textarea
                placeholder="Delivery Instruction"
                {...register("deliveryInstruction", { required: true })}
                className="textarea textarea-bordered w-full"
              />
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Submit
        </button>
      </form>

      {pendingData && (
        <div className="mt-6 p-4 bg-base-300 rounded-xl text-center">
          <p className="font-semibold text-lg mb-2">
            Delivery Cost: ${pendingData.cost}
          </p>
          <button onClick={handleConfirm} className="btn btn-success">
            Confirm & Save
          </button>
        </div>
      )}

      
    </div>
  );
};

export default SendParcel;
