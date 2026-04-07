export const adminAddServiceSections = [
  {
    title: "Service Information",
    fields: [
      ["Service Name", ""],
      ["Parent Category", "Home Maintenance"],
      ["Description", ""],
    ],
  },
  {
    title: "Pricing and Providers",
    fields: [
      ["Base Price", ""],
      ["Estimated Duration", "1-2 hours"],
      ["Provider Selection", "Automatic Assignment"],
    ],
  },
];

export const adminAddCategorySections = [
  {
    title: "Category Details",
    fields: [
      ["Category Name", ""],
      ["Category Icon", "home_repair_service"],
      ["Description", ""],
    ],
  },
  {
    title: "Classification Settings",
    fields: [
      ["Visibility", "Public"],
      ["Status", "Active"],
      ["Sorting Priority", "10"],
    ],
  },
];

export const adminAddCompanySections = [
  {
    title: "Company Information",
    fields: [
      ["Company Name", ""],
      ["Business Registration Number", ""],
      ["Industry Category", "Technology"],
      ["Company Size", "11 - 50 employees"],
    ],
  },
  {
    title: "Contact and Address",
    fields: [
      ["Contact Person Name", ""],
      ["Email Address", ""],
      ["Phone Number", ""],
      ["Physical Address", ""],
    ],
  },
  {
    title: "Verification Documents",
    fields: [
      ["Trade License", "Pending upload"],
      ["Tax Certificate", "Pending upload"],
      ["Company Logo", "Optional"],
    ],
  },
];

export const adminEditCompanySections = [
  {
    title: "General Information",
    fields: [
      ["Company Name", "Khadmeni Corp"],
      ["Industry", "Technology"],
      ["Foundation Year", "2015"],
      ["Description", "Leading workforce solution provider in North Africa."],
    ],
  },
  {
    title: "Contact and Social",
    fields: [
      ["Email", "contact@khadmeni-corp.com"],
      ["Phone", "+216 70 000 000"],
      ["Website", "www.khadmeni-corp.com"],
      ["LinkedIn", "linkedin.com/company/khadmeni"],
    ],
  },
];

export const adminEditProviderSections = [
  {
    title: "Personal Information",
    fields: [
      ["Full Name", "Ahmed Mansour"],
      ["Phone Number", "+216 22 345 678"],
      ["Email Address", "a.mansour@example.com"],
      ["Physical Address", "15 Rue de Carthage, Tunis"],
    ],
  },
  {
    title: "Professional Details",
    fields: [
      ["Provider ID", "PRV-88291"],
      ["Primary Service", "Plumbing"],
      ["Account Status", "Active"],
      ["Average Rating", "4.9"],
    ],
  },
];

export const adminEditUserSections = [
  {
    title: "Personal Information",
    fields: [
      ["Full Name", "Aria Montgomery"],
      ["Email Address", "aria.m@example.com"],
      ["Phone Number", "+1 (555) 000-1234"],
      ["Physical Address", "742 Evergreen Terrace, Springfield"],
    ],
  },
  {
    title: "Account Details",
    fields: [
      ["Account Status", "Active"],
      ["Gender", "Female"],
      ["Loyalty Tier", "Gold"],
      ["Total Orders", "27"],
    ],
  },
];

export const adminRewardsSections = [
  {
    title: "Points Configuration",
    fields: [
      ["Points per $1 Spent", "10"],
      ["Minimum Redemption", "500"],
      ["Point Expiry Period", "12 Months"],
      ["Reward Processing Time", "Instant"],
    ],
  },
  {
    title: "Loyalty Tiers",
    fields: [
      ["Bronze Threshold", "0"],
      ["Silver Threshold", "1,000"],
      ["Gold Threshold", "5,000"],
      ["Platinum Threshold", "10,000"],
    ],
  },
];

export const adminSystemSettingsSections = [
  {
    title: "Commission Settings",
    fields: [
      ["Global Platform Commission (%)", "15"],
      ["Variable Category Commission", "Enabled"],
      ["Provider Settlement Delay", "7 days"],
    ],
  },
  {
    title: "Currency and Taxes",
    fields: [
      ["Default Currency", "USD"],
      ["Tax Rate", "8"],
      ["Invoice Prefix", "KH-INV"],
    ],
  },
  {
    title: "Security and Access",
    fields: [
      ["Session Timeout", "30 mins"],
      ["Two-Factor Auth", "Required for admins"],
      ["Audit Logging", "Enabled"],
    ],
  },
];
