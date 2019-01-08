import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HighlightedDirective, NgxMentionsComponent} from "./mentions.component";
import {NgxMentionsInputDirective} from "./mentions.directive";
import {MentionsListComponent} from "./mentions-list.component";

const EXPORT_DIRECTIVES = [
    NgxMentionsComponent,
    NgxMentionsInputDirective
];
const DECLARATIONS = [
    NgxMentionsComponent,
    NgxMentionsInputDirective,
    MentionsListComponent,
    HighlightedDirective
];

@NgModule({imports: [CommonModule], exports: EXPORT_DIRECTIVES, declarations: DECLARATIONS})
export class NgxMentionsModule {}