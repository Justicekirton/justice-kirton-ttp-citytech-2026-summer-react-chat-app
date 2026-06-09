import { faker } from "@faker-js/faker";

// @ts-expect-error
const Message = ({text}) => {

    // BUG: the name regenerates on every new message. old messages should retain their name
    const name = faker.person.fullName();

    return <>
      <p className='message'>
        {text} - {name}
      </p>
    </>;
}

export default Message;