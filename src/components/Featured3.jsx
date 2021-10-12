import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useN04TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n04';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';

import LCAPPic from 'images/LCAPLogo.png';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 343,
    margin: 'auto',
    borderRadius: 12,
    padding: 12,
  },
  media: {
    borderRadius: 6,
  },
}));

export const Featured3 = React.memo(function MusicCard() {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useBouncyShadowStyles();
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={cx(styles.media, mediaStyles.root)}
        image={
          LCAPPic
        }
      />
      <CardContent>
        <TextInfoContent
          classes={textCardContentStyles}
          overline={'December 2020'}
          heading={'LCAP Analysis'}
          body={
            'Aggregated data from over 800 California school district Local Control and Accountability Plans (LCAP) for analysis through Python, visualized data and reported findings.'
          }
        />
      </CardContent>
    </Card>
  );
});
export default Featured3