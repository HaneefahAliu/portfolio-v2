export default function AvailabilityPill() {
    return (
        <div className="inline-flex items-center gap-2 rounded-full  py-1">
            <span className="h-2 w-2 rounded-full bg-green-600" />
            <span className="text-[14px] font-regular font-inter font-regular  text-green-600">
                Available
            </span>
        </div>
    );
}