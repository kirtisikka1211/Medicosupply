import dynamic from "next/dynamic";

const Map= dynamic(async()=> await import('./Map'),{
    ssr: false
});
export default Map;