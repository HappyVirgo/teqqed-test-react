import { Asset } from "../../../types"
import { Skeleton } from "../../common/skeleton"
import { AssetItem } from "../item"

type Props = {
	assets: Asset[]
	loading?: boolean
}

const AssetsList = ({ assets = [], loading }: Props) => {
	return (
		loading ? <>
			<Skeleton />
			<Skeleton />
			<Skeleton />
			<Skeleton />
			<Skeleton />
			<Skeleton />
		</>
			:
			<>
				{
					assets.length > 0 ? assets.map((asset, index) => <AssetItem key={index} asset={asset} />) : <div>No Result</div>
				}
			</>
	)
}

export default AssetsList