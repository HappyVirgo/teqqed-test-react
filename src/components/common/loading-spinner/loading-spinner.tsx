import classes from './loading-spinner.module.scss'

export const LoadingSpinner = () => {
  return (
    <div className={classes.loadingSpinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}