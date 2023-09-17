import { Component } from '@angular/core';

import { DropdownOptions } from "flowbite";
import { fileDownload } from "@app/core";

@Component({
    selector: 'app-main-info',
    templateUrl: './main-info.component.html',
    styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent {
    public content: any;

    private presentationFileUrls: string[] = [
        'assets/pdf/Presentation.pdf',
        'assets/pdf/Presentation-slides.pdf'
    ]

    private dropdownOptions: DropdownOptions = {
        triggerType: 'none',
        delay: 100,
        offsetDistance: 2,
    }

    constructor() {
        this.initContent();
    }

    private initContent(): void {
        this.content = {
            education: [
                {
                    date: '2020 - 2021',
                    info: 'Basic IT Center. Master of international Technology (IT).',
                },
                {
                    date: '2021 - 2022',
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
            ],
            skills: [
                {
                    name: 'Main Stack',
                    dropdown: {
                        id: 'main-stack-dropdown',
                        items: [
                            {
                                name: 'HTML 5'
                            },
                            {
                                name: 'CSS 3',
                                dropdown: {
                                    id: 'css-dropdown',
                                    items: [
                                        {
                                            name: 'SASS, SCSS'
                                        },
                                        {
                                            name: 'Bootstrap'
                                        },
                                        {
                                            name: 'Tailwind'
                                        }
                                    ],
                                    options: {
                                        ...this.dropdownOptions,
                                        placement: 'right'
                                    }
                                }
                            },
                            {
                                name: 'JavaScript'
                            },
                            {
                                name: 'Angular'
                            },
                            {
                                name: 'TypeScript'
                            },
                            {
                                name: 'RxJs'
                            }
                        ],
                        options: this.dropdownOptions
                    }
                },
                {
                    name: 'Angular Libraries',
                    dropdown: {
                        id: 'angular-libraries-dropdown',
                        items: [
                            {
                                name: 'Angular Material ( UI )'
                            },
                            {
                                name: 'NG-Bootstrap ( UI )'
                            },
                            {
                                name: 'PrimeNG ( UI )'
                            },
                            {
                                name: 'Ag Grid ( UI Table )'
                            },
                            {
                                name: 'NgRx ( State Management )'
                            }
                        ],
                        options: this.dropdownOptions
                    }
                },
                {
                    name: 'Version Control',
                    dropdown: {
                        id: 'version-control-dropdown',
                        items: [
                            {
                                name: 'Git'
                            },
                            {
                                name: 'GitHub'
                            },
                            {
                                name: 'Azure Devops'
                            },
                            {
                                name: 'Bitbucket'
                            }
                        ],
                        options: this.dropdownOptions
                    }
                },
                {
                    name: 'Communication with Database'
                },
                {
                    name: 'JavaScript Packages'
                }
            ]
        }
    }

    public downloadPresentationFiles(): void {
        fileDownload(this.presentationFileUrls);
    }
}
