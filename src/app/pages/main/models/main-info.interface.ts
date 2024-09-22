import { IMenuDropdownItem } from '@core/interfaces';

export interface IMainInfo {
  education: IMainInfoItem<IEducation>;
  qualifications: IMainInfoItem<IQualification>;
  languages: IMainInfoItem<ILanguage>;
  skills: IMainInfoItem<ISkill>;
  experience: IMainInfoItem<IExperience>;
}

export interface IMainInfoItem<T> {
  title: string;
  items: Array<T>;
}

export interface IEducation {
  date: string;
  info: string;
}

export interface IQualification {
  info: string;
}

export interface ILanguage {
  info: string;
}

export interface IExperience {
  date: string;
  companyName: string;
  position: string;
  info: string;
  responsibilities: string[];
  files?: string[];
}

export interface ISkill extends IMenuDropdownItem {}
