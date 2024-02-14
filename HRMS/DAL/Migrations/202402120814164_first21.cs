namespace DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class first21 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Tokens",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        LoginToken = c.String(nullable: false),
                        CreatedDate = c.DateTime(nullable: false),
                        ExpDate = c.DateTime(),
                        UId = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.UId, cascadeDelete: true)
                .Index(t => t.UId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Tokens", "UId", "dbo.Users");
            DropIndex("dbo.Tokens", new[] { "UId" });
            DropTable("dbo.Tokens");
        }
    }
}
