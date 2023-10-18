interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Create bookings.',
    'Read company and car information.',
    'Create and manage reviews.',
    'Report issues.',
  ],
  ownerAbilities: ['Manage company information', 'Manage car fleet', 'View bookings', 'View reviews and reports'],
  getQuoteUrl: 'https://app.roq.ai/proposal/552d0366-dc15-4b4b-a2ba-25b9f2b15531',
};
