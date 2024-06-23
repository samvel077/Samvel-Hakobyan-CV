import { IMenuDropdownItem } from '@app/core';

export interface IMainInfo {
  education: IMainInfoItem<IEducation>;
  qualifications: IMainInfoItem<IQualification>;
  languages: IMainInfoItem<ILanguage>;
  skills: IMainInfoItem<ISkill>;
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

export interface ISkill extends IMenuDropdownItem {}
