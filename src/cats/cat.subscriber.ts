import { DataSource, EntitySubscriberInterface, EventSubscriber, InsertEvent } from 'typeorm';
import { Cat } from './cat.entity';

@EventSubscriber()
export class CatSubscriber implements EntitySubscriberInterface<Cat> {
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Cat;
  }

  beforeInsert(event: InsertEvent<Cat>) {
    console.log(`BEFORE CAT INSERTED: `, event.entity);
  }
}
