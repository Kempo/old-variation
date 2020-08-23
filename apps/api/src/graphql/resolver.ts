import { Message } from '@variation-studio/api-interfaces';

const resolver = {
  Query: {
    hello(): Message {
      return { message: 'Hello World!' } ;
    }
  }
}

export default resolver;
