import Grid from "@/components/grid";
import HelloLoader from "@/components/hello-loader";

export default function Home() {
	return (
		<>
			<HelloLoader />
			<div className="mt-24">
				<Grid />
			</div>
		</>
	);
}
