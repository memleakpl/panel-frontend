/*
 * CreateGroupForm Messages
 *
 * This contains all the text for the CreateGroupForm component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.CreateGroupForm.header',
    defaultMessage: 'Create new group',
  },
  nameHint: {
    id: 'app.components.CreateGroupForm.nameHint',
    defaultMessage: 'services',
  },
  nameLabel: {
    id: 'app.components.CreateGroupForm.nameLabel',
    defaultMessage: 'Group name',
  },
  descriptionHint: {
    id: 'app.components.CreateGroupForm.descriptionHint',
    defaultMessage: 'Group description',
  },
  descriptionLabel: {
    id: 'app.components.CreateGroupForm.descriptionLabel',
    defaultMessage: 'Accounts used to authenticate various services',
  },
  create: {
    id: 'app.components.CreateGroupForm.create',
    defaultMessage: 'Create',
  },
});
