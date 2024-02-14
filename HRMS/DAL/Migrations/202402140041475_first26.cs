namespace DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class first26 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Admins",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UId = c.String(maxLength: 128),
                        Name = c.String(),
                        Email = c.String(),
                        Phone = c.String(),
                        ProfilePicture = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.UId)
                .Index(t => t.UId);
            
            CreateTable(
                "dbo.EmployeeHistories",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UId = c.String(maxLength: 128),
                        Name = c.String(),
                        Email = c.String(),
                        Position = c.String(),
                        Date = c.DateTime(nullable: false),
                        Status = c.String(),
                        NewPosition = c.String(),
                        Depertment = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.UId)
                .Index(t => t.UId);
            
            CreateTable(
                "dbo.PaymentHistories",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UId = c.String(maxLength: 128),
                        Name = c.String(),
                        Position = c.String(),
                        PaymentDate = c.DateTime(nullable: false),
                        Amount = c.String(),
                        Status = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.UId)
                .Index(t => t.UId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.PaymentHistories", "UId", "dbo.Users");
            DropForeignKey("dbo.EmployeeHistories", "UId", "dbo.Users");
            DropForeignKey("dbo.Admins", "UId", "dbo.Users");
            DropIndex("dbo.PaymentHistories", new[] { "UId" });
            DropIndex("dbo.EmployeeHistories", new[] { "UId" });
            DropIndex("dbo.Admins", new[] { "UId" });
            DropTable("dbo.PaymentHistories");
            DropTable("dbo.EmployeeHistories");
            DropTable("dbo.Admins");
        }
    }
}
