// import { Container } from "./styles";
import Blob1 from "../../assets/blob1.svg";
import Blob2 from "../../assets/blob2.svg";
import Blob3 from "../../assets/blob3.svg";
import { BlobOne, BlobThree, BlobTwo } from "./styles";

export function BackgroundBlobs() {
	return (
		<>
			<BlobOne src={Blob1} />
			<BlobTwo src={Blob2} />
			<BlobThree src={Blob3} />
		</>
	);
}