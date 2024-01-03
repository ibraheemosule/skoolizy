import { memo } from 'react';
import UserCard from 'components/reusables/user-card/UserCard';

const people = new Array(30).fill({
  name: 'Whitney Francis',
  role: 'Teacher',
  rating: 4.5,
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  twitter: '#',
  linkedin: '#',
});

const TeachersList = () =>
  people.map((person) => (
    <UserCard key={Math.random()}>
      <>
        <UserCard.Image src={person.imageUrl} />
        <UserCard.User
          user={person.name}
          role={person.role}
          rating={person.rating}
        >
          <>
            <UserCard.Icon url={person.twitter} name="Twitter" />
            <UserCard.Icon url={person.linkedin} name="Linkedin" />
          </>
        </UserCard.User>
      </>
    </UserCard>
  ));

export default memo(TeachersList);
