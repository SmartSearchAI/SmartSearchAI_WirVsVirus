import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-attribute-list-component',
  templateUrl: './app.component.attribute.list.html',
  styleUrls: ['./app.component.attribute.list.scss']
})

export class AttributeList {
  @Input() attributes: Array<Object>;
  categories = [
    {key: 'MEDICATION', value: "Medication"},
    {key: 'MEDICAL_CONDITION', value: "Medical Condition"},
    {key: 'ANATOMY', value: "Anatomy"},
    {key: 'TEST_TREATMENT_PROCEDURE', value: "Test Treatment Procedure"},
    {key: 'PROTECTED_HEALTH_INFORMATION', value: "Personal Data"},
    ]
  title = 'AttributeLIst';
  getAttributes(category){
    return this.attributes.filter(attr => attr['Category'] === category.key);
  }
}
