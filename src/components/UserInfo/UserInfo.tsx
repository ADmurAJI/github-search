import { InfoItemProps } from 'components/InfoItem';
import { LocalGithubUser } from 'types';
import { InfoItem } from 'components/InfoItem';
import styles from './UserInfo.module.scss';
import { ReactComponent as CompanyIcon } from 'assets/icon-company.svg';
import { ReactComponent as LocationIcon } from 'assets/icon-location.svg';
import { ReactComponent as TwitterIcon } from 'assets/icon-twitter.svg';
import { ReactComponent as BlogIcon } from 'assets/icon-website.svg';

interface UserInfoProps
  extends Pick<LocalGithubUser, 'blog' | 'company' | 'twitter' | 'location'> {}

export const UserInfo = ({
  blog,
  company,
  twitter,
  location,
}: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <LocationIcon />,
      text: location,
    },
    {
      icon: <BlogIcon />,
      text: blog,
      isLink: true,
    },
    {
      icon: <TwitterIcon />,
      text: twitter,
    },
    {
      icon: <CompanyIcon />,
      text: company,
    },
  ];

  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => (
        <InfoItem {...item} key={index} />
      ))}
    </div>
  );
};
