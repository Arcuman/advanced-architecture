import { SerializableEvent } from 'src/shared/domain/interfaces/serializable-event';

export abstract class EventStore {
  abstract persist(
    evnetOrEvents: SerializableEvent | SerializableEvent[],
  ): Promise<void>;

  abstract getEventByStreamId(streamId: string): Promise<SerializableEvent[]>;
}
