Ext.define('Example.view.Hobby', {
    extend: 'Ext.form.Panel',
    alias: 'widget.hobbyview',
    initComponent: function () {
        var me = this;
		//initComponent方法当中构造items
        me.items = me.buildItems();

        me.callParent(arguments);
    },

    onSaveClick: function () {
        var me = this,
            values = me.getValues(),
            user = me.getUser();

        me.down('#hobbyTpl').update({
            Name: user.get('Name'),
            FavoriteHobby: values.FavoriteHobby
        });
    },
	//视图内置函数创建组件,通过me变量
	//便于定义items元素事件响应的作用域
    buildItems: function () {
        var me = this;

        return [
            {
                xtype: 'textfield',
                name: 'FavoriteHobby'
            },
            {
                xtype: 'button',
                itemId: 'save',
                text: 'Save',
                listeners: {
                    click: me.onSaveClick,
                    scope: me
                }
            },
            {
                xtype: 'component',
                itemId: 'hobbyTpl',
                tpl: '{Name}\'s favorite hobby is {FavoriteHobby}'
            }
        ];
    }
});
