namespace DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class first22 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Employees", "Left", c => c.DateTime());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Employees", "Left", c => c.DateTime(nullable: false));
        }
    }
}
