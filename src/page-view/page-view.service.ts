import { Injectable } from '@nestjs/common';
import { CreatePageViewDto } from './dto/create-page-view.dto';

@Injectable()
export class PageViewService {
  private pageView = [];
  create(createPageViewDto: CreatePageViewDto) {
    this.pageView.push(createPageViewDto);
    return createPageViewDto;
  }
}
