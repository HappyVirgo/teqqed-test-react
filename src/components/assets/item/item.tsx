import { Asset } from "../../../types"
import classes from './item.module.scss'
import LocationIndicator from '../../../assets/img/icon/location-indicator.svg'

type AssetItemProps = {
	asset: Asset;
}
export const AssetItem = ({ asset }: AssetItemProps) => {
	const { image, title, location, bathroom, bedroom, price } = asset;
	return (
		<div className={classes.assetItemWrapper}>
			<img src={image} className={classes.assetImage} />
			<div className={classes.assetInfo}>
				<div className={classes.assetTitle}>{title}</div>
				<div className={classes.assetLocation}><img src={LocationIndicator} alt={''} />&nbsp;{location}</div>
				<div className={classes.assetRoomInfo}>{bathroom} Slaapkamers • {bedroom} Badkamers</div>
				<div className={classes.assetPrice}>€&nbsp;{price}</div>
			</div>
		</div>
	)
}