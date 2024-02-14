namespace DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class first : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Employees",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UId = c.String(maxLength: 128),
                        Name = c.String(nullable: false, maxLength: 50),
                        Email = c.String(nullable: false),
                        Gender = c.String(maxLength: 20),
                        PhoneNumber = c.String(maxLength: 20),
                        Address = c.String(maxLength: 50),
                        Position = c.String(maxLength: 50),
                        Salary = c.Int(nullable: false),
                        joined = c.DateTime(nullable: false),
                        Left = c.DateTime(nullable: false),
                        Depertment = c.String(),
                        AccNumber = c.Int(nullable: false),
                        ProfilePicture = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.UId)
                .Index(t => t.UId);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        UId = c.String(nullable: false, maxLength: 128),
                        Email = c.String(),
                        Password = c.String(),
                        UserType = c.String(),
                    })
                .PrimaryKey(t => t.UId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Employees", "UId", "dbo.Users");
            DropIndex("dbo.Employees", new[] { "UId" });
            DropTable("dbo.Users");
            DropTable("dbo.Employees");
        }
    }
}
