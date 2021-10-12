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

import PieImg from 'images/Pie.png'

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

export const Featured1 = React.memo(function MusicCard() {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useBouncyShadowStyles();
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={cx(styles.media, mediaStyles.root)}
        image={
          PieImg
        }
      />
      <CardContent>
        <TextInfoContent
          classes={textCardContentStyles}
          overline={'May 2021'}
          heading={'Slice the Pie'}
          body={
            'Created a guessing game webapp utilizing React and the D3 library involving the UC Davis budget. See how well your own choices match the ones the real Provost made!'
          }
        />
      </CardContent>
    </Card>
  );
});
export default Featured1