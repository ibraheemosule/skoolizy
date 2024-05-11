import UserCard from '~reusables/UserCard';

const people = new Array(30).fill({
  name: 'Whitney Francis',
  role: 'Student ',
  rating: 3.5,
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  twitter: '#',
  linkedin: '#',
});

const StudentsList = () =>
  people.map((person) => (
    <UserCard
      key={Math.random()}
      user={person.name}
      role={person.role}
      rating={person.rating}
      imageSrc={person.imageUrl}
    />
  ));

export default StudentsList;
