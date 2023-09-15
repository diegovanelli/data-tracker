import { Injectable } from '@nestjs/common';
import { CreatePageViewDto } from './dto/create-page-view.dto';

@Injectable()
export class PageViewService {
  create(createPageViewDto: CreatePageViewDto) {
    return 'This action adds a new pageView';
  }
}
