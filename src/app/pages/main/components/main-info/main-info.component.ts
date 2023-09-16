import { Component } from '@angular/core';

@Component({
    selector: 'app-main-info',
    templateUrl: './main-info.component.html',
    styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent {
    public content: any;

    constructor() {
        this.initContent();
    }

    private initContent(): void {
        this.content = {
            education: [
                {
                    date: '2020-2021',
                    info: 'Basic IT Center. Master of international Technology (IT).',
                },
                {
                    date: '2021-2022',
                    info: 'Angular - The Complete Guide American program',
                }
            ],
            qualifications: [
                {
                    info: 'Complaint Resolution',
                },
                {
                    info: 'Effective Communication'
                },
                {
                    info: 'Team-building & Training',
                },
                {
                    info: 'Patience & Empathy',
                },
                {
                    info: 'Ability to Keep Calm under Pressure or in Stressful Situations',
                }
            ],
            languages: [
                {
                    info: 'Armenian-Native',
                },
                {
                    info: 'English- Intermediate',
                },
                {
                    info: 'Russian-Upper intermediate'
                }
            ]
        }
    }
}
