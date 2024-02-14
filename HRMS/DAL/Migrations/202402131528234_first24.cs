namespace DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class first24 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Payrolls",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UId = c.String(maxLength: 128),
                        TotalWorkDays = c.Int(nullable: false),
                        TotalOvertime = c.Int(nullable: false),
                        GrossPay = c.Int(nullable: false),
                        IncomeTax = c.Int(nullable: false),
                        Deductions = c.Int(nullable: false),
                        Bonus = c.Int(nullable: false),
                        Netpay = c.Int(nullable: false),
                        Status = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.UId)
                .Index(t => t.UId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Payrolls", "UId", "dbo.Users");
            DropIndex("dbo.Payrolls", new[] { "UId" });
            DropTable("dbo.Payrolls");
        }
    }
}
