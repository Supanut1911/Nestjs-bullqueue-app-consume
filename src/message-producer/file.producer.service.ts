import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class FileProducerService {
  constructor(
    @InjectQueue('file-operation-queue')
    private queue: Queue,
  ) {}

  async;
}
